import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SSOButtons } from "@/components/SSOButtons";
import { CustomCaptcha } from "@/components/CustomCaptcha";
import { ForgotPasswordModal } from "@/components/ForgotPasswordModal";
import { PasswordExpiryModal } from "@/components/PasswordExpiryModal";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
import jodoworldLogo from '@/assets/jodoworld-logo.png';
import cloudsBackground from '@/assets/clouds-background.jpg';
import '../i18n/config';

const Index = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPasswordExpiry, setShowPasswordExpiry] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isAccountLocked, setIsAccountLocked] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      // Language is handled by the LanguageSelector component
    }
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAccountLocked) {
      toast({
        title: t('accountLocked'),
        variant: "destructive",
      });
      return;
    }
    
    // Reset errors
    setEmailError('');
    setPasswordError('');
    
    // Validate form
    let hasErrors = false;
    
    if (!email) {
      setEmailError(t('emailRequired'));
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setEmailError(t('invalidEmail'));
      hasErrors = true;
    }
    
    if (!password) {
      setPasswordError(t('passwordRequired'));
      hasErrors = true;
    }
    
    if (!captchaValid) {
      toast({
        title: t('pleaseCompleteCaptcha'),
        variant: "destructive",
      });
      hasErrors = true;
    }

    if (hasErrors) return;

    setIsLoading(true);
    
    // Simulate login process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate different login scenarios
      const scenario = Math.random();
      
      if (scenario < 0.3) {
        // Password expired scenario
        setShowPasswordExpiry(true);
        setIsLoading(false);
        return;
      } else if (scenario < 0.5) {
        // Wrong password scenario
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);
        
        if (newAttempts >= 5) {
          setIsAccountLocked(true);
          toast({
            title: t('accountLocked'),
            variant: "destructive",
          });
        } else {
          const remaining = 5 - newAttempts;
          toast({
            title: t('attemptWarning', { remaining }),
            variant: "destructive",
          });
        }
        setIsLoading(false);
        return;
      }
      
      // Successful login
      setLoginAttempts(0);
      toast({
        title: "Welcome back!",
        description: "Demo: Login successful with email authentication",
      });
    } catch (error) {
      toast({
        title: t('error'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCaptchaVerify = (isValid: boolean) => {
    setCaptchaValid(isValid);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) {
      setEmailError('');
    }
    
    // Real-time validation
    if (value && !validateEmail(value)) {
      setEmailError(t('invalidEmail'));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordError) {
      setPasswordError('');
    }
    
    // Real-time validation
    if (value && value.length < 6) {
      setPasswordError(t('passwordTooShort'));
    }
  };

  const handlePasswordUpdate = () => {
    setShowPasswordExpiry(false);
    setLoginAttempts(0);
    toast({
      title: "Password updated successfully",
      description: "You can now login with your new password",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cloudsBackground})` }}
      />
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/30 dark:bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          <img 
            src={jodoworldLogo} 
            alt="Jodoworld" 
            className="h-10 w-auto"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md mx-auto bg-gradient-card-modern backdrop-blur-xl border-border/30 shadow-card-sso animate-scale-in">
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <LogIn className="w-8 h-8 text-accent" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                {t('signInTitle')}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('signInSubtitle')}
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Email Login Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="email"
                    placeholder={t('email')}
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={`pl-10 bg-input border-border/50 focus:border-primary/50 transition-smooth ${
                      emailError ? 'border-destructive focus:border-destructive' : ''
                    }`}
                    required
                  />
                </div>
                {emailError && (
                  <p className="text-sm text-destructive">{emailError}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t('password')}
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    className={`pl-10 pr-10 bg-input border-border/50 focus:border-primary/50 transition-smooth ${
                      passwordError ? 'border-destructive focus:border-destructive' : ''
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-sm text-destructive">{passwordError}</p>
                )}
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-primary hover:text-accent transition-smooth"
                >
                  {t('forgotPassword')}
                </button>
              </div>

              <CustomCaptcha onVerify={handleCaptchaVerify} />

              {/* Login Attempts Warning */}
              {loginAttempts > 0 && loginAttempts < 5 && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
                  <p className="text-sm text-destructive text-center">
                    {t('attemptWarning', { remaining: 5 - loginAttempts })}
                  </p>
                </div>
              )}

              {isAccountLocked && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
                  <p className="text-sm text-destructive text-center font-medium">
                    {t('accountLocked')}
                  </p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-accent text-primary-foreground shadow-button-sso hover:shadow-button-sso hover:scale-105 transition-smooth"
                disabled={isLoading || !captchaValid || isAccountLocked}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>{t('loading')}</span>
                  </div>
                ) : (
                  t('getStarted')
                )}
              </Button>
            </form>

            {/* SSO Options */}
            <SSOButtons />
          </CardContent>
        </Card>
      </main>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal 
        isOpen={showForgotPassword} 
        onClose={() => setShowForgotPassword(false)} 
      />

      {/* Password Expiry Modal */}
      <PasswordExpiryModal 
        isOpen={showPasswordExpiry} 
        onClose={() => setShowPasswordExpiry(false)}
        onPasswordChange={handlePasswordUpdate}
      />

      {/* Footer */}
      <footer className="relative z-10 text-center p-6">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <span>© 2024 {t('poweredBy')}</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth">
            Avhan Technologies Pvt Ltd
          </Badge>
        </div>
      </footer>
    </div>
  );
};

export default Index;
