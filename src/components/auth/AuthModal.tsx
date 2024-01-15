"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useQuery from "~/hooks/useQuery";
import { Database } from "~/types/database.types";

import { Close } from "@mui/icons-material";
import { Dialog, DialogProps, IconButton } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa, ViewType } from "@supabase/auth-ui-shared";

type AuthModalProps = Omit<DialogProps, "children">;

function AuthModal(props: AuthModalProps) {
  const supabase = createClientComponentClient<Database>();
  const { setSearchParam, getSearchParam } = useQuery();
  const [viewType, setViewType] = useState<ViewType>();

  const handleClose = useCallback(() => {
    setSearchParam("auth-modal");
  }, [setSearchParam]);

  useEffect(() => {
    const viewTypeValuesArray = [
      "sign_in",
      "sign_up",
      "magic_link",
      "forgotten_password",
      "update_password",
      "verify_otp",
    ];
    const viewType = getSearchParam("auth-modal");
    const isValidViewType = viewTypeValuesArray.includes(viewType ?? "");

    if (isValidViewType) {
      setViewType(viewType as ViewType);
    } else {
      handleClose();
    }
  }, [getSearchParam, handleClose]);

  return (
    <Dialog
      {...props}
      onClose={handleClose}
      closeAfterTransition={true}
      fullWidth
    >
      <div className="flex h-full justify-center dark:bg-gray-900">
        <div className="relative m-auto w-full">
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 p-10 sm:rounded-3xl sm:bg-white sm:dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/images/logo.png"}
                alt={"Bubble Booking Logo"}
                width={6000}
                height={6000}
                className="aspect-square w-20"
              />
              <span className="text-lg">Bubble Booking</span>
            </div>
            <div className="w-full">
              <Auth
                view={viewType}
                supabaseClient={supabase}
                providers={["google", "facebook", "azure"]}
                appearance={{ theme: ThemeSupa }}
                redirectTo="http://localhost:3000/auth/callback"
              />
            </div>
          </div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="absolute right-2 top-2"
          >
            <Close />
          </IconButton>
        </div>
      </div>
    </Dialog>
  );
}

export default AuthModal;
