export interface User {
    user_id: string;
    name: string;
    email: string;
    role: string;
    password: string;
    areaofspecialization: string;
  }

export interface loginUserDetails{
        
        userId: string;
        name: string;
        email: string;
        nationalId: string;
        phoneNumber: string;
        dateOfBirth: Date;
        location: string;
        gender: string;
        nationality: string;
        occupation: string;
        // password: string;
    
    
}