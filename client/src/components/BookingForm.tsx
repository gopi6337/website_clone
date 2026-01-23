import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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

// Country codes list
const countryCodes = [
  { code: "+91", country: "India", flag: "IN" },
  { code: "+1", country: "US/Canada", flag: "US" },
  { code: "+44", country: "UK", flag: "GB" },
  { code: "+61", country: "Australia", flag: "AU" },
  { code: "+971", country: "UAE", flag: "AE" },
  { code: "+65", country: "Singapore", flag: "SG" },
  { code: "+60", country: "Malaysia", flag: "MY" },
  { code: "+49", country: "Germany", flag: "DE" },
  { code: "+33", country: "France", flag: "FR" },
  { code: "+81", country: "Japan", flag: "JP" },
];

// Form validation schema
const bookingSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  parentEmail: z.string().email("Please enter a valid email address"),
  countryCode: z.string().min(1, "Please select a country code"),
  phoneNumber: z.string().min(6, "Please enter a valid phone number"),
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
    control,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onSubmit",
    defaultValues: {
      parentName: "",
      parentEmail: "",
      countryCode: "+91",
      phoneNumber: "",
      childGrade: "",
      subjectInterest: "",
      message: "",
    },
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
          phoneNumber: `${data.countryCode} ${data.phoneNumber}`,
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

          {/* Phone Number with Country Code */}
          <div>
            <Label htmlFor="phoneNumber" className="text-base font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2 mt-2">
              <Controller
                name="countryCode"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={submitStatus === "loading"}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.code} {country.country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter phone number"
                {...register("phoneNumber")}
                className="flex-1"
                disabled={submitStatus === "loading"}
              />
            </div>
            {errors.countryCode && (
              <p className="text-red-500 text-sm mt-1">{errors.countryCode.message}</p>
            )}
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Child's Grade */}
          <div>
            <Label htmlFor="childGrade" className="text-base font-semibold">
              Child's Grade <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="childGrade"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
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
              )}
            />
            {errors.childGrade && (
              <p className="text-red-500 text-sm mt-1">{errors.childGrade.message}</p>
            )}
          </div>

          {/* Subject Interest */}
          <div>
            <Label htmlFor="subjectInterest" className="text-base font-semibold">
              Subject of Interest <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="subjectInterest"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
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
              )}
            />
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
