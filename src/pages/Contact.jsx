import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert'; // Import Alert component
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons
import { Typewriter } from 'react-simple-typewriter';
  
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactPage = () => {
  const [status, setStatus] = useState({ type: '', message: '' }); // Track status

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    const { name, email, message } = data;

    emailjs
      .send(serviceID, templateID, { name, email, message }, userID)
      .then(
        (response) => {
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          form.reset();
        },
        (error) => {
          setStatus({ type: 'error', message: 'Failed to send the message. Please try again.' });
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <div className="pb-10 flex flex-col items-center justify-start px-6 text-white">
      <header className="w-full max-w-5xl mx-auto text-center mt-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Get In <span className="text-green-500">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400">
        <Typewriter
            words={[
              "          Have a question, collaboration idea, or just want to say hi? I'd love to hear from you!",
            ]}
            loop={1}
            typeSpeed={10}
            deleteSpeed={30}
            cursor
          />
        </p>
      </header>

      <section className="w-full max-w-5xl mt-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-green-500">Contact Me</h2>

          {/* Display Alert */}
          {status.message && (
            <Alert
              variant={status.type === 'success' ? 'success' : 'error'}
              className="mb-6"
            >
              {status.message}
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input className="bg-gray-900" placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input className="bg-gray-900" placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea className="bg-gray-900" placeholder="Your message" {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </section>

      <footer className="w-full max-w-5xl mt-16 text-center">
        <p className="text-gray-400">
          Or reach out directly at: <span className="text-green-500">ignacio@example.com</span>
        </p>

        <div className="mt-8 flex justify-center space-x-6">
          {/* Social Icons */}
          <a href="https://github.com/nachohc04" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/ignacio-hern%C3%A1ndez-correa-6801721b1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
            <FaLinkedin size={30} />
          </a>
          {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
            <FaTwitter size={30} />
          </a> */}
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
