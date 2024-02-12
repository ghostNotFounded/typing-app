import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 text-destructive w-full p-2 flex items-center rounded gap-x-2 text-sm">
      <ExclamationTriangleIcon fontSize={20} />
      {message}
    </div>
  );
};

export default FormError;
