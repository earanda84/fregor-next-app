import React from "react"
import { Modal, Label, TextInput, Checkbox, Button } from "flowbite-react"

export default function ModalLogin({setModalOn, setChoice}) {
    const click = () => {
        setChoice(true)
        setModalOn(false)
    }

    const close = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (
        <>
            <React.Fragment>
                {/* <Button onClick={click}>
                    Toggle modal
                </Button> */}
                <Modal
                    show={click}
                    size="md"
                    popup={true}
                    onClose={close}
                >
                    <Modal.Header className="dark:bg-dark-700/50"/>
                    <Modal.Body className="dark:bg-dark-700/50">
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Ingresa a tu cuenta
                            </h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email"
                                        value="Your email"
                                    />
                                </div>
                                <TextInput
                                    id="email"
                                    placeholder="nombre@mail.com"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password"
                                        value="Your password"
                                        />
                                </div>
                                <TextInput
                                        placeholder="contraseña"
                                    id="password"
                                    type="password"
                                    required={true}
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">
                                        Recordarme
                                    </Label>
                                </div>
                                <a
                                    href="/modal"
                                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                >
                                    Recuperar contraseña
                                </a>
                            </div>
                            <div className="w-full">
                                <Button>
                                    Ingresar
                                </Button>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Aún no te registras?
                                <a
                                    href="http://localhost:3000/signup"
                                    className="text-blue-700 hover:underline dark:text-blue-500"
                                >
                                    Crea tú cuenta aquí
                                </a>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    )
}
