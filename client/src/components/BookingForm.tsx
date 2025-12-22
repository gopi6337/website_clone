import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

// Form validation schema
const bookingSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  parentEmail: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  childGrade: z.string().min(1, "Please select a grade"),
  subjectInterest: z.string().min(1, "Please select a subject"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  formspreeEndpoint?: string;
}

export default function BookingForm({ formspreeEndpoint = "YOUR_FORMSPREE_ENDPOINT" }: BookingFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Trial Class Booking - ${data.subjectInterest}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again or contact us directly.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {submitStatus === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            Your booking request has been submitted successfully. We'll contact you within 24 hours to schedule your FREE trial class.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Parent Name */}
          <div>
            <Label htmlFor="parentName" className="text-base font-semibold">
              Parent/Guardian Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="parentName"
              type="text"
              placeholder="Enter your full name"
              {...register("parentName")}
              className="mt-2"
              disabled={submitStatus === "loading"}
            />
            {errors.parentName && (
              <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>
            )}
          </div>

          {/* Parent Email */}
          <div>
            <Label htmlFor="parentEmail" className="text-base font-semibold">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="parentEmail"
              type="email"
              placeholder="your.email@example.com"
              {...register("parentEmail")}
              className="mt-2"
              disabled={submitStatus === "loading"}
            />
            {errors.parentEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.parentEmail.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phoneNumber" className="text-base font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+1 (555) 123-4567"
              {...register("phoneNumber")}
              className="mt-2"
              disabled={submitStatus === "loading"}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Child's Grade */}
          <div>
            <Label htmlFor="childGrade" className="text-base font-semibold">
              Child's Grade <span className="text-red-500">*</span>
            </Label>
            <Select
              onValueChange={(value) => setValue("childGrade", value)}
              disabled={submitStatus === "loading"}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grade-5">Grade 5</SelectItem>
                <SelectItem value="grade-6">Grade 6</SelectItem>
                <SelectItem value="grade-7">Grade 7</SelectItem>
                <SelectItem value="grade-8">Grade 8</SelectItem>
                <SelectItem value="grade-9">Grade 9</SelectItem>
                <SelectItem value="grade-10">Grade 10</SelectItem>
              </SelectContent>
            </Select>
            {errors.childGrade && (
              <p className="text-red-500 text-sm mt-1">{errors.childGrade.message}</p>
            )}
          </div>

          {/* Subject Interest */}
          <div>
            <Label htmlFor="subjectInterest" className="text-base font-semibold">
              Subject of Interest <span className="text-red-500">*</span>
            </Label>
            <Select
              onValueChange={(value) => setValue("subjectInterest", value)}
              disabled={submitStatus === "loading"}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Math">Mathematics</SelectItem>
                <SelectItem value="Coding">Coding & Programming</SelectItem>
                <SelectItem value="Both">Both Math & Coding</SelectItem>
              </SelectContent>
            </Select>
            {errors.subjectInterest && (
              <p className="text-red-500 text-sm mt-1">{errors.subjectInterest.message}</p>
            )}
          </div>

          {/* Optional Message */}
          <div>
            <Label htmlFor="message" className="text-base font-semibold">
              Additional Message (Optional)
            </Label>
            <textarea
              id="message"
              rows={4}
              placeholder="Any specific requirements or questions?"
              {...register("message")}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={submitStatus === "loading"}
            />
          </div>

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <p className="text-red-700 text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold rounded-full"
            disabled={submitStatus === "loading"}
          >
            {submitStatus === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Book FREE Trial Class"
            )}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to receive communication from EduVerseJr regarding your trial class.
          </p>
        </form>
      )}
    </div>
  );
}
