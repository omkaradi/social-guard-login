import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';

export const CustomCaptcha = ({ onVerify }) => {
  const { t } = useTranslation();
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleCaptchaChange = (value) => {
    const upperValue = value.toUpperCase();
    setUserInput(upperValue);
    setError('');
    
    // Real-time validation
    onVerify(upperValue === captchaText);
  };

  const validateCaptcha = () => {
    if (userInput !== captchaText) {
      setError(t('invalidCaptcha'));
      onVerify(false);
    } else {
      setError('');
      onVerify(true);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <div className="flex-1 flex items-center justify-center bg-muted border border-border rounded-md p-3 h-12 text-lg font-mono tracking-widest select-none">
          <span className="text-foreground">{captchaText}</span>
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={generateCaptcha}
          className="h-12 w-12 hover:bg-accent transition-smooth"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-2">
        <Input
          type="text"
          placeholder={t('enterCaptcha')}
          value={userInput}
          onChange={(e) => handleCaptchaChange(e.target.value)}
          onBlur={validateCaptcha}
          className={`text-center font-mono tracking-widest bg-input border-border/50 focus:border-primary/50 transition-smooth ${
            error ? 'border-destructive focus:border-destructive' : ''
          }`}
          maxLength={5}
        />
        {error && (
          <p className="text-sm text-destructive text-center">{error}</p>
        )}
      </div>
    </div>
  );
};