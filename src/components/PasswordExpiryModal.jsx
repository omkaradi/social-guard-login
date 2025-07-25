import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, Eye, EyeOff } from 'lucide-react';

export const PasswordExpiryModal = ({ isOpen, onClose, onPasswordChange }) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const validateForm = () => {
    const newErrors = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };

    if (!currentPassword) {
      newErrors.currentPassword = t('currentPasswordRequired');
    }

    if (!newPassword) {
      newErrors.newPassword = t('newPasswordRequired');
    } else if (newPassword.length < 8) {
      newErrors.newPassword = t('passwordTooShort');
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = t('confirmPasswordRequired');
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = t('passwordsDoNotMatch');
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t('passwordChanged'),
        description: t('passwordChangedDescription'),
      });
      
      onPasswordChange();
      onClose();
      resetForm();
    } catch (error) {
      toast({
        title: t('error'),
        description: t('passwordChangeError'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setErrors({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gradient-card backdrop-blur-lg border-border/20">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl font-semibold text-foreground">
            {t('passwordExpired')}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t('passwordExpiredDescription')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Current Password */}
          <div className="space-y-2">
            <Label htmlFor="current-password" className="text-sm font-medium text-foreground">
              {t('currentPassword')}
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                placeholder={t('enterCurrentPassword')}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className={`pl-10 pr-10 bg-input border-border/50 focus:border-primary/50 transition-smooth ${
                  errors.currentPassword ? 'border-destructive focus:border-destructive' : ''
                }`}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
              >
                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-sm text-destructive">{errors.currentPassword}</p>
            )}
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-sm font-medium text-foreground">
              {t('newPassword')}
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                placeholder={t('enterNewPassword')}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={`pl-10 pr-10 bg-input border-border/50 focus:border-primary/50 transition-smooth ${
                  errors.newPassword ? 'border-destructive focus:border-destructive' : ''
                }`}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
              >
                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-sm text-destructive">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-sm font-medium text-foreground">
              {t('confirmPassword')}
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder={t('confirmNewPassword')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`pl-10 pr-10 bg-input border-border/50 focus:border-primary/50 transition-smooth ${
                  errors.confirmPassword ? 'border-destructive focus:border-destructive' : ''
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              disabled={isLoading}
            >
              {t('cancel')}
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-accent text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>{t('updating')}</span>
                </div>
              ) : (
                t('updatePassword')
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};