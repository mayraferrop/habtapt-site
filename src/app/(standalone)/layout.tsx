import { Toaster } from "@/components/ui/sonner";

export default function StandaloneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        duration={4000}
        closeButton
        richColors
        toastOptions={{
          style: {
            background: "white",
            color: "#0F1729",
            border: "1px solid rgba(26, 62, 92, 0.12)",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(26, 62, 92, 0.15)",
          },
        }}
      />
    </>
  );
}
