import React from "react";

import { Button, Flex, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(() => resolve(null), 2000));

    console.log(values);
  };

  return (
    <Flex width="100vw" height="100vh" align={"center"} justify={"center"}>
      <Flex
        as={"form"}
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding={8}
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email as FieldError}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password as FieldError}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          marginTop={6}
          colorScheme="pink"
          size={"lg"}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
