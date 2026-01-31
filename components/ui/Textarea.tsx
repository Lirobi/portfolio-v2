interface TextareaProps {
  label: string;
  placeholder?: string;
  name?: string;
  rows?: number;
  required?: boolean;
}

export default function Textarea({
  label,
  placeholder,
  name,
  rows = 5,
  required = false,
}: TextareaProps) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="w-full px-5 py-4 bg-foreground/5 border-2 border-transparent rounded-xl focus:border-coral focus:bg-background focus:outline-none transition-all resize-none"
        placeholder={placeholder}
      />
    </div>
  );
}
