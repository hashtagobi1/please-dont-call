import { CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

export default function SuccessMsg() {
  return (
    <Alert>
      <CheckCircle2 className="h-4 w-4" />
      <AlertDescription>
        {"Thank you for signing up! We'll let you know when it is out."}
      </AlertDescription>
    </Alert>
  );
}
