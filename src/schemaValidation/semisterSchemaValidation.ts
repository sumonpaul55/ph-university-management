import { z } from "zod";

export const academicValidationSchema = z.object({
  name: z.string({ required_error: "Name Is Required" }),
  year: z.string({ required_error: "Year Is Required" }),
  startMonth: z.string({ required_error: "Start Month Is Required" }),
  endMonth: z.string({ required_error: "End Month Is Required" }),
});
