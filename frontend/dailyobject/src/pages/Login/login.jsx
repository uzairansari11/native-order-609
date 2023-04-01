import { useToggle, upperFirst } from "@mantine/hooks";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,

    Group,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { SiTwitter } from "react-icons/si";
import {
	Box,
	Button,
	Center,
	Heading,
	useToast,
	Spinner,
} from "@chakra-ui/react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import axios from "axios";

export function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButLoading, setIsButLoading] = useState(false);

    const navigate = useNavigate();
    const toast = useToast();

    const handleClick = () => {
        navigate("/signup");
    };
    const handleAdmin = () => {
        navigate("/admin/login");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            email,
            password,
        };
        console.log(payload);
        if (email !== "" && password !== "") {
            try {
                const res = await axios.post(
                    `http://localhost:8080/users/login`,
                    payload
                );
                console.log(res);
                if (res.data.message === "Login Successful") {
                    localStorage.setItem("token", res.data.token);
                    setIsButLoading(true);
                    setTimeout(() => {
                        setIsButLoading(false);
                        toast({
                            title: "Login Successful",
                            description: "",
                            status: "success",
                            duration: 2500,
                            isClosable: true,
                            position: "top",
                        });
                        navigate("/");
                    }, 2000);
                } else {
                }
            } catch (error) {
                return error;
            }
        } else {
            toast({
                title: "Details Missing",
                description: "Please fill your details",
                status: "warning",
                duration: 2500,
                isClosable: true,
                position: "bottom-right",
            });
        }
        // console.log(payload);
    };

    return (
        <div>
            <div className="log_main">
                <Paper
                    radius="md"
                    p="xl"
                    withBorder
                    {...props}
                    style={{ width: "40%" }}>
                    <Heading size="lg" weight={300}>
                        Welcome to GadgetGalaxy, Login with
                    </Heading>

                    <Box
                        style={{
                            display: "flex",
                            marginTop: "5rem",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                        {/* <GoogleButton radius="xl">Google</GoogleButton> */}
                        {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
                        <Button
                            style={{ borderRadius: "5rem", width: "170px" }}
                            variant={"outline"}
                            leftIcon={<FcGoogle />}>
                            <Center>
                                <Text>Google</Text>
                            </Center>
                        </Button>
                        <Button
                            // colorScheme={"twitter"}
                            variant={"outline"}
                            style={{ borderRadius: "5rem", width: "170px" }}
                            leftIcon={<SiTwitter color="#1da1f2" />}>
                            <Center>
                                <Text>Twitter</Text>
                            </Center>
                        </Button>
                    </Box>

                    <Divider
                        label="Or continue with email"
                        labelPosition="center"
                        my="lg"
                    />

                    <form>
                        <Stack>
                            <TextInput
                                required
                                label="Email"
                                placeholder="______@mail.com"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                radius="md"
                            />

                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Your password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                radius="md"
                            />
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={handleClick}
                                size="xs">
                                Don't have an account? Register
                            </Anchor>
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={handleAdmin}
                                size="xs">
                                Admin Portal
                            </Anchor>

                            <Button
                                onClick={handleSubmit}
                                style={{
                                    borderRadius: "25px",
                                    backgroundColor: "black",
                                    color: "white", // or color: "whiteAlpha.900"
                                    transition: "all .3s ease-in-out",
                                }}
                                _hover={{
                                    boxShadow:
                                        "10px 10px 47px 0px rgba(158,158,158,1)",
                                }}>
                                {!isButLoading &&
                                    `Login
                                    `}
                                {isButLoading && (
                                    <Spinner
                                        thickness="2px"
                                        speed="0.50s"
                                        emptyColor="gray.200"
                                        color="black"
                                        size="md"
                                    />
                                )}
                            </Button>
                        </Group>
                    </form>
                </Paper>
                <Box style={{ width: "60%" }}>
                    <img
                        style={{ borderRadius: "10px" }}
                        src="https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80,"
                        alt=""
                    />
                </Box>
            </div>
            <Footer />
        </div>
    );
}
