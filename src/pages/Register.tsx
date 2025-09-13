import React from 'react';
import { AuthForm } from '@/components/AuthForm';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-6">
          <div className="text-6xl animate-pulse">✈️</div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Start Your Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Create your account and unlock exclusive travel deals, personalized recommendations, and connect with fellow travelers.
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <AuthForm mode="register" />
        </div>
      </div>
    </div>
  );
};

export default Register;