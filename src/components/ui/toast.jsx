/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { Check } from "lucide-react";

const ToastContext = React.createContext({
  showToast: () => {},
});

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = React.useState(null);

  const showToast = React.useCallback((message, type = "success") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-border bg-card/95 px-4 py-2.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-md animate-fade-in">
          {toast.type === "success" && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Check className="h-2.5 w-2.5" />
            </span>
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => React.useContext(ToastContext);
