"use client";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";

import { FaPaw, FaDog, FaCat } from "react-icons/fa";
import { MdPets } from "react-icons/md";

const AddPetDetailsPage = () => {

  // FORM SUBMIT
  const onSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const petDetailsData = Object.fromEntries(formData.entries());

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/addPetNestDetail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(petDetailsData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {

        alert("Add Pet Nest Details Successfully!");

        e.target.reset();

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7fb] via-white to-[#f8fdff] dark:from-[#09142b] dark:via-[#0f172a] dark:to-[#111827] transition-all duration-300 px-5 lg:px-10 py-16">

      {/* BACKGROUND ANIMAL ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <FaPaw className="absolute top-10 left-10 text-pink-100 dark:text-pink-900 text-7xl animate-bounce" />

        <FaPaw className="absolute top-32 right-20 text-cyan-100 dark:text-cyan-900 text-6xl animate-pulse" />

        <FaPaw className="absolute bottom-20 left-1/4 text-orange-100 dark:text-orange-900 text-8xl animate-ping opacity-40" />

        <FaPaw className="absolute bottom-10 right-10 text-rose-100 dark:text-rose-900 text-7xl animate-bounce" />

        <FaDog className="absolute top-1/3 left-16 text-pink-200 dark:text-pink-800 text-8xl animate-pulse opacity-20" />

        <FaCat className="absolute top-20 right-1/3 text-purple-200 dark:text-purple-800 text-7xl animate-bounce opacity-20" />

        <FaDog className="absolute bottom-24 right-1/4 text-cyan-100 dark:text-cyan-800 text-7xl animate-pulse opacity-20" />

        <MdPets className="absolute top-1/2 left-1/2 text-pink-100 dark:text-pink-900 text-9xl animate-pulse opacity-10" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-[#1e293b] border border-pink-200 dark:border-gray-700 px-5 py-2 rounded-full shadow-sm">

            <MdPets className="text-pink-500 text-lg" />

            <span className="text-pink-500 font-semibold text-sm">
              Add New Pet
            </span>

          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-black dark:text-white leading-tight">

            Add Pet{" "}

            <span className="text-[#ff6b6b]">
              Details
            </span>

          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-5 max-w-2xl mx-auto text-lg leading-8">

            Add your lovely pet information and help them find a caring forever home through Pets Nest.

          </p>

        </div>

        {/* FORM CARD */}
        <Card className="bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-pink-100 dark:border-gray-700 shadow-2xl rounded-[30px] overflow-hidden">

          <form
            onSubmit={onSubmit}
            className="p-6 md:p-10 space-y-8"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* PET NAME */}
              <TextField name="name" isRequired>

                <Label className="text-black dark:text-white">
                  Pet Name
                </Label>

                <Input
                  placeholder="Pet Name"
                  className="rounded-2xl text-black dark:text-white"
                />

                <FieldError />

              </TextField>

              {/* BREED */}
              <TextField name="breed" isRequired>

                <Label className="text-black dark:text-white">
                  Breed
                </Label>

                <Input
                  placeholder="Breed"
                  className="rounded-2xl text-black dark:text-white"
                />

                <FieldError />

              </TextField>

              {/* AGE */}
              <TextField name="age" isRequired>

                <Label className="text-black dark:text-white">
                  Age
                </Label>

                <Input
                  placeholder="Age"
                  className="rounded-2xl text-black dark:text-white"
                />

                <FieldError />

              </TextField>

              {/* GENDER */}
              <div>

                <Label className="mb-2 block text-black dark:text-white">
                  Gender
                </Label>

                <Select
                  name="gender"
                  isRequired
                  placeholder="Select gender"
                >

                  <Select.Trigger className="rounded-2xl text-black dark:text-white bg-white dark:bg-[#1e293b]">

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

                <Label className="mb-2 block text-black dark:text-white">
                  Species
                </Label>

                <Select
                  name="species"
                  isRequired
                  placeholder="Select species"
                >

                  <Select.Trigger className="rounded-2xl text-black dark:text-white bg-white dark:bg-[#1e293b]">

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

                      <ListBox.Item id="Rabbit" textValue="Rabbit">
                        Rabbit
                      </ListBox.Item>

                      <ListBox.Item id="Turtle" textValue="Turtle">
                        Turtle
                      </ListBox.Item>

                      <ListBox.Item id="Tiger" textValue="Tiger">
                        Tiger
                      </ListBox.Item>

                    </ListBox>

                  </Select.Popover>

                </Select>

              </div>

              {/* ADOPTION FEE */}
              <TextField
                name="adoptionFee"
                type="number"
                isRequired
              >

                <Label className="text-black dark:text-white">
                  Adoption Fee
                </Label>

                <Input
                  type="number"
                  placeholder="100"
                  className="rounded-2xl text-black dark:text-white"
                />

                <FieldError />

              </TextField>

              {/* HEALTH */}
              <TextField name="health" isRequired>

                <Label className="text-black dark:text-white">
                  Health Status
                </Label>

                <Input
                  placeholder="Healthy"
                  className="rounded-2xl text-black dark:text-white"
                />

                <FieldError />

              </TextField>

              {/* VACCINATION */}
              <TextField name="vaccinated" isRequired>

                <Label className="text-black dark:text-white">
                  Vaccination Status
                </Label>

                <Input
                  placeholder="Vaccinated"
                  className="rounded-2xl text-black dark:text-white"
                />

                <FieldError />

              </TextField>

              {/* STATUS */}
              <TextField name="status" isRequired>

                <Label className="text-black dark:text-white">
                  Status
                </Label>

                <Input
                  placeholder="Available"
                  className="rounded-2xl text-black dark:text-white"
                />

                <FieldError />

              </TextField>

              {/* LOCATION */}
              <TextField name="location" isRequired>

                <Label className="text-black dark:text-white">
                  Location
                </Label>

                <Input
                  placeholder="Dhaka, Bangladesh"
                  className="rounded-2xl text-black dark:text-white"
                />

                <FieldError />

              </TextField>

              {/* IMAGE URL */}
              <div className="md:col-span-2">

                <TextField name="image" isRequired>

                  <Label className="text-black dark:text-white">
                    Image URL
                  </Label>

                  <Input
                    type="url"
                    placeholder="https://example.com/pet.jpg"
                    className="rounded-2xl text-black dark:text-white"
                  />

                  <FieldError />

                </TextField>

              </div>

              {/* DESCRIPTION */}
              <div className="md:col-span-2">

                <TextField name="description" isRequired>

                  <Label className="text-black dark:text-white">
                    Description
                  </Label>

                  <TextArea
                    placeholder="Write pet description..."
                    className="rounded-3xl text-black dark:text-white"
                  />

                  <FieldError />

                </TextField>

              </div>

              {/* OWNER EMAIL */}
              <div className="md:col-span-2">

                <TextField name="email" isRequired>

                  <Label className="text-black dark:text-white">
                    Owner Email
                  </Label>

                  <Input
                    placeholder="owner@gmail.com"
                    className="rounded-2xl text-black dark:text-white"
                  />

                  <FieldError />

                </TextField>

              </div>

            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              className="group bg-[#ff6b6b] hover:bg-[#ff5252] transition-all duration-300 text-white px-10 py-5 rounded-full text-lg font-bold shadow-[0_10px_40px_rgba(212,42,92,0.5)] flex items-center w-full gap-3"
            >

              Add Pet

            </Button>

          </form>

        </Card>

      </div>

    </section>
  );
};

export default AddPetDetailsPage;