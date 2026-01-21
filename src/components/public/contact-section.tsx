import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

export default function ContactSection() {
  return (
    <section className="space-y-12" id="contact">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold ">Let&apos;s Build Together</h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          I build efficient, accessible, and scalable frontend experiences
          backed by a strong technical foundation. Send me a message, let&apos;s
          start the conversation!
        </p>
      </div>
      <Card className="mx-auto bg-card-bg md:p-8 p-4 md:p-10 ">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-semibold text-text-muted">
                Your Name
              </label>
              <Input
                className="input-field"
                id="name"
                name="name"
                placeholder="John Doe"
                type="text"
                required
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-semibold text-text-muted">
                Your Email
              </label>
              <Input
                className="input-field"
                id="email"
                name="email"
                placeholder="john@example.com"
                type="email"
                required
              />
            </div>
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-semibold text-text-muted">
              Message
            </label>
            <Textarea
              className="input-field"
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={8}
              required
            />
          </div>
          <Button className="w-full  font-bold py-4 px-6  transition-colors">
            Send Message
          </Button>
        </form>
      </Card>
    </section>
  );
}
