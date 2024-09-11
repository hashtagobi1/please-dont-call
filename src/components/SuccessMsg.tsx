import { CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function SuccessMsg() {
  return (
    <Alert>
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        {"Thank you for signing up! We'll keep you updated on the release."}
      </AlertDescription>
    </Alert>
  );
}
