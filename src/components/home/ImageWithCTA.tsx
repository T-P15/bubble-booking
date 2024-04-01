"use client";

import { ChangeEventHandler, useCallback, useState } from "react";
import { toast } from "react-toastify";
import useSupabaseClient from "~/utils/client/supabase-client";

import { MailOutline } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";

import AnimateComponentInView from "../AnimatePresence";

function ImageWithCTA() {
  const supabase = useSupabaseClient();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>();

  const handleChangeEmail: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubscribe = useCallback(async () => {
    try {
      setIsLoading(true);

      // Add to subscription_list
      await supabase.from("subscription_list").upsert({
        email,
      });

      // Email to notify they have been added
      await fetch("/api/email/send", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      toast.success("Confirmed! You’re in!", { toastId: "subscribe-toast" });
    } catch (error: any) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [email, supabase]);

  return (
    <AnimateComponentInView>
      <section id="image-with-cta" className="bg-white/60 dark:bg-black/60">
        <div
          className={`mx-auto flex max-w-screen-lg flex-row px-4 py-8 lg:gap-8 lg:px-6 lg:py-16`}
        >
          <div className="mx-auto flex max-w-screen-lg flex-1 flex-col gap-4">
            <span className="from-primary-dark-blue dark:from-primary-blue via-secondary-dark-white-blue dark:via-secondary-white-blue to-tertiary-dark-baby-pink dark:to-tertiary-baby-pink mb-2 inline-block w-fit bg-gradient-to-r bg-clip-text text-xl font-normal text-transparent">
              learn more
            </span>
            <h2 className="text-4xl tracking-tight text-gray-900 dark:text-white">
              ready to try bubble?
            </h2>
            <p className="font-light text-gray-500  dark:text-gray-400 lg:text-xl">
              make your job easier instantly
              <br />
              subscribe to stay updated
            </p>
            <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mb-2 flex flex-col items-start justify-start gap-2 rounded-lg text-base text-gray-600 focus:ring-4 dark:text-gray-200 lg:mb-4 ">
              <ButtonGroup variant="outlined" color="inherit" fullWidth>
                <TextField
                  placeholder="Enter email address"
                  className="flex-1 border-gray-500 dark:border-gray-400"
                  onChange={handleChangeEmail}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutline className="text-gray-500 dark:text-gray-400" />
                      </InputAdornment>
                    ),
                    className:
                      "rounded-r-none text-gray-500 dark:text-gray-400",
                  }}
                />
                <Button
                  size="small"
                  className="w-fit"
                  disabled={isLoading || !email}
                  onClick={handleSubscribe}
                >
                  {isLoading ? <CircularProgress /> : "subscribe"}
                </Button>
              </ButtonGroup>{" "}
            </div>
            <p>subscribe for the announcement!</p>
          </div>
          <div className="mt-4 hidden flex-1 md:mt-0 lg:col-span-6 lg:flex"></div>
        </div>
      </section>
    </AnimateComponentInView>
  );
}

export default ImageWithCTA;
