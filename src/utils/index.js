export const validateName = (name) => !name;


export const validateEmail = (email) => (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

export const validateProfileImage = (profileImage) => (profileImage && !['image/jpeg', 'image/png'].includes(profileImage.type));

export const validatePassword = (password, confirmPassword = null) => {
     if(!confirmPassword) return(!password || password.length < 6);
     else return(!password || password.length < 6 || !confirmPassword || confirmPassword.length < 6|| password !== confirmPassword);
}

export const BASE_URL = 'https://jsonplaceholder.typicode.com/'
export const endpoints = {
     users: 'users'
}