"use client";
import { ContactForm } from "../sections/contact-form/contact-form";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

interface DialogContactProps {
  trigger: React.ReactNode;
}

export function DialogContact({ trigger }: DialogContactProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="p-0 mx-auto max-h-[80vh] overflow-y-auto">
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
