
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { User, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthSectionProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const AuthSection = ({ isAuthenticated, setIsAuthenticated }: AuthSectionProps) => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    setIsAuthenticated(true);
    setShowAuth(false);
    toast({
      title: isLogin ? "Welcome back!" : "Account created!",
      description: isLogin ? "You have successfully logged in." : "Your account has been created successfully.",
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-white">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <span className="font-medium">Welcome back!</span>
        </div>
        <Button variant="outline" onClick={handleLogout} className="border-white text-white hover:bg-white hover:text-green-600">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          onClick={() => setShowAuth(true)}
          className="border-white text-white hover:bg-white hover:text-green-600"
        >
          Login
        </Button>
        <Button 
          onClick={() => { setIsLogin(false); setShowAuth(true); }}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          Sign Up
        </Button>
      </div>

      {showAuth && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md p-6 glass-morphism">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h3>
                <p className="text-gray-600">
                  {isLogin ? "Sign in to your account" : "Join thousands saving on medical bills"}
                </p>
              </div>

              <form onSubmit={handleAuth} className="space-y-4">
                {!isLogin && (
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                )}
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                    {isLogin ? "Sign In" : "Create Account"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowAuth(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AuthSection;
