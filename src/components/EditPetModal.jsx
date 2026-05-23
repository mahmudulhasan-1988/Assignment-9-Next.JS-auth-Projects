"use client";

import { useState, useEffect } from "react";

import { Envelope } from "@gravity-ui/icons";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

import { BiEdit } from "react-icons/bi";

import { FaPaw, FaDog, FaCat } from "react-icons/fa";

const EditPetModal = ({ addPetNestDetail }) => {

  const {
    _id,
    name,
    species,
    breed,
    age,
    gender,
    vaccinated,
    location,
    adoptionFee,
    status,
    image,
    health,
    description,
  } = addPetNestDetail;

  const [isOpen, setIsOpen] = useState(false);

  // SCROLL CONTROL
  useEffect(() => {

    if (isOpen) {

      document.body.style.overflow = "hidden";

      document.documentElement.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "auto";

      document.documentElement.style.overflow = "auto";

    }

    return () => {

      document.body.style.overflow = "auto";

      document.documentElement.style.overflow = "auto";

    };

  }, [isOpen]);

  // UPDATE PET
  const onSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const petDetailsData = Object.fromEntries(formData.entries());

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/addPetNestDetail/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(petDetailsData),
        }
      );

      const data = await res.json();

      console.log(data);

      if (data.modifiedCount) {

        alert("Pet Nest Updated Successfully!");

        setIsOpen(false);

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <Modal>

      {/* OPEN BUTTON */}
      <Button
        variant="outline"
        onPress={() => setIsOpen(true)}
        className="bg-white dark:bg-[#111827] border-pink-300 text-pink-500 hover:bg-pink-500 hover:text-white rounded-full transition-all duration-300"
      >

        <BiEdit className="text-lg " />

        Edit Pet

      </Button>

      {/* MODAL */}
      <Modal.Backdrop
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        className="backdrop-blur-sm bg-black/40"
      >

        <Modal.Container
          placement="center"
          scroll="inside"
        >

          <Modal.Dialog className="sm:max-w-4xl rounded-[30px] overflow-hidden bg-gradient-to-br from-[#fff7fb] via-white to-[#f8fdff] border border-pink-100 shadow-2xl">

            {/* ANIMAL BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white/90 dark:bg-black backdrop-blur-md border border-pink-100 shadow-2xl rounded-[30px]">

              <FaPaw className="absolute top-10 left-10 text-pink-100 text-7xl animate-bounce" />

              <FaPaw className="absolute top-32 right-20 text-cyan-100 text-6xl animate-pulse" />

              <FaPaw className="absolute bottom-20 left-1/4 text-orange-100 text-8xl animate-ping opacity-40" />

              <FaDog className="absolute top-1/3 left-16 text-pink-200 text-8xl animate-pulse opacity-20" />

              <FaCat className="absolute top-20 right-1/3 text-purple-200 text-7xl animate-bounce opacity-20" />

              <FaDog className="absolute bottom-20 right-1/4 text-cyan-100 text-7xl animate-pulse opacity-20" />

            </div>

            {/* HEADER */}
            <Modal.Header className="relative z-10     ">

              <Modal.Icon className="bg-pink-100 text-pink-500">

                <Envelope className="size-5" />

              </Modal.Icon>

              <div className="">

                <Modal.Heading className="text-3xl font-extrabold text-gray-900 dark:text-white  ">

                  Edit Pet Nest

                </Modal.Heading>

                <p className="mt-1 text-sm text-gray-500">

                  Update your pet information below.

                </p>

              </div>

            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="relative z-10 p-0 max-h-[85vh] overflow-y-auto">

              <Surface
                variant="default"
                className="bg-transparent shadow-none"
              >

                <form
                  onSubmit={onSubmit}
                  className="p-6 md:p-10 space-y-8"
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* PET NAME */}
                    <TextField
                      defaultValue={name}
                      name="name"
                      isRequired
                    >

                      <Label>Pet Name</Label>

                      <Input
                        placeholder="Pet Name"
                        className="rounded-2xl"
                      />

                      <FieldError />

                    </TextField>

                    {/* BREED */}
                    <TextField
                      defaultValue={breed}
                      name="breed"
                      isRequired
                    >

                      <Label>Breed</Label>

                      <Input
                        placeholder="Breed"
                        className="rounded-2xl"
                      />

                      <FieldError />

                    </TextField>

                    {/* AGE */}
                    <TextField
                      defaultValue={age}
                      name="age"
                      isRequired
                    >

                      <Label>Age</Label>

                      <Input
                        placeholder="Age"
                        className="rounded-2xl"
                      />

                      <FieldError />

                    </TextField>

                    {/* GENDER */}
                    <div>

                      <Label className="mb-2 block">
                        Gender
                      </Label>

                      <Select
                        defaultValue={gender}
                        name="gender"
                        isRequired
                        placeholder="Select Gender"
                      >

                        <Select.Trigger className="rounded-2xl">

                          <Select.Value />

                          <Select.Indicator />

                        </Select.Trigger>

                        <Select.Popover>

                          <ListBox>

                            <ListBox.Item id="Male" textValue="Male">
                              Male
                            </ListBox.Item>

                            <ListBox.Item id="Female" textValue="Female">
                              Female
                            </ListBox.Item>

                          </ListBox>

                        </Select.Popover>

                      </Select>

                    </div>

                    {/* SPECIES */}
                    <div>

                      <Label className="mb-2 block">
                        Species
                      </Label>

                      <Select
                        defaultValue={species}
                        name="species"
                        isRequired
                        placeholder="Select Species"
                      >

                        <Select.Trigger className="rounded-2xl">

                          <Select.Value />

                          <Select.Indicator />

                        </Select.Trigger>

                        <Select.Popover>

                          <ListBox>

                            <ListBox.Item id="Dog" textValue="Dog">
                              Dog
                            </ListBox.Item>

                            <ListBox.Item id="Cat" textValue="Cat">
                              Cat
                            </ListBox.Item>

                            <ListBox.Item id="Bird" textValue="Bird">
                              Bird
                            </ListBox.Item>

                            <ListBox.Item id="Turtle" textValue="Turtle">
                              Turtle
                            </ListBox.Item>

                          </ListBox>

                        </Select.Popover>

                      </Select>

                    </div>

                    {/* ADOPTION FEE */}
                    <TextField
                      defaultValue={adoptionFee}
                      name="adoptionFee"
                      type="number"
                      isRequired
                    >

                      <Label>Adoption Fee</Label>

                      <Input
                        type="number"
                        placeholder="100"
                        className="rounded-2xl"
                      />

                      <FieldError />

                    </TextField>

                    {/* HEALTH */}
                    <TextField
                      defaultValue={health}
                      name="health"
                      isRequired
                    >

                      <Label>Health Status</Label>

                      <Input
                        placeholder="Healthy"
                        className="rounded-2xl"
                      />

                      <FieldError />

                    </TextField>

                    {/* VACCINATION */}
                    <TextField
                      defaultValue={vaccinated}
                      name="vaccinated"
                      isRequired
                    >

                      <Label>Vaccination Status</Label>

                      <Input
                        placeholder="Vaccinated"
                        className="rounded-2xl"
                      />

                      <FieldError />

                    </TextField>

                    {/* STATUS */}
                    <TextField
                      defaultValue={status}
                      name="status"
                      isRequired
                    >

                      <Label>Status</Label>

                      <Input
                        placeholder="Available"
                        className="rounded-2xl"
                      />

                      <FieldError />

                    </TextField>

                    {/* LOCATION */}
                    <TextField
                      defaultValue={location}
                      name="location"
                      isRequired
                    >

                      <Label>Location</Label>

                      <Input
                        placeholder="Dhaka"
                        className="rounded-2xl"
                      />

                      <FieldError />

                    </TextField>

                    {/* IMAGE */}
                    <div className="md:col-span-2">

                      <TextField
                        defaultValue={image}
                        name="image"
                        isRequired
                      >

                        <Label>Image URL</Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          className="rounded-2xl"
                        />

                        <FieldError />

                      </TextField>

                    </div>

                    {/* DESCRIPTION */}
                    <div className="md:col-span-2">

                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >

                        <Label>Description</Label>

                        <TextArea
                          placeholder="Describe the pet..."
                          className="rounded-3xl"
                        />

                        <FieldError />

                      </TextField>

                    </div>

                  </div>

                  {/* FOOTER */}
                  <Modal.Footer className="px-0 pt-5">

                    <Button
                      onPress={() => setIsOpen(false)}
                      variant="outline"
                      className="rounded-full border-gray-300"
                    >

                      Cancel

                    </Button>

                    <Button
                      type="submit"
                      className="bg-gradient-to-r bg-[#ff6b6b] hover:bg-[#ff5252] hover:scale-[1.03] transition-all duration-300 text-white rounded-full px-8"
                    >

                      Update Pet

                    </Button>

                  </Modal.Footer>

                </form>

              </Surface>

            </Modal.Body>

          </Modal.Dialog>

        </Modal.Container>

      </Modal.Backdrop>

    </Modal>
  );
};

export default EditPetModal;
