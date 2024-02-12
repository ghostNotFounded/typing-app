import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 text-emerald-500 w-full p-2 flex items-center rounded gap-x-2 text-sm">
      <CheckCircledIcon fontSize={20} />
      {message}
    </div>
  );
};

export default FormSuccess;
