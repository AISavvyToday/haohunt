from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers





from django.shortcuts import render, redirect


# New function-based views for template rendering
def register_view(request):
    if request.method == 'POST':
        # Handle registration logic
        # Redirect to some page
        return redirect('')
    return render(request, 'accounts/register.html')

def login_view(request):
    if request.method == 'POST':
        # Handle login logic
        # Redirect to some page
        return redirect('')
    return render(request, 'accounts/login.html')

def profile_view(request):
    if request.method == 'POST':
        # Handle profile update logic
        # Redirect to some page
        return redirect('')
    return render(request, 'accounts/profile.html')

# ... (existing API views)




############################# API endpoints for mobile or front-end frameworks if needed.##################




# Create a User Serializer Class
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')  # New field

        # Validation can go here
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        # Create the user
        user = User.objects.create_user(username=username, password=password, email=email)
        token, _ = Token.objects.get_or_create(user=user)

        # Serialize the user instance
        serializer = UserSerializer(user)

        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        # Validation and Error Handling
        if not username or not password:
            return Response({'error': 'Must include both username and password'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_404_NOT_FOUND)

        if user.check_password(password):
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    request.auth.delete()
    return Response({"detail": "Logout successful"}, status=status.HTTP_200_OK)  # Added message

@api_view(['GET', 'PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_profile(request):
    if request.method == 'GET':
        serializer = UserSerializer(request.user)
        return Response({"user": serializer.data})

    if request.method == 'PUT':
        serializer = UserSerializer(request.user, data=request.data, partial=True)  # partial=True allows updates
        if serializer.is_valid():
            serializer.save()
            return Response({"user": serializer.data, "detail": "Profile updated"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
