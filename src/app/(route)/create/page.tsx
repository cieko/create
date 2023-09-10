import { getAuthSession } from "@/lib/auth";
import React from "react";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
import CreateCourseForm from "@/components/create/CreateCourseForm";

const CreatePage = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/gallery");
  }
  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-2 sm:px-0">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
        Create
      </h1>

      <div className="flex p-4 mt-5 border-none bg-secondary opacity-30 hover:opacity-50">
        <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
        <div>
          Enter in a course datails, and specify the context. And our AI will
          generate a course for you! (powered by openai)
        </div>
      </div>

      <CreateCourseForm />
    </div>
  );
};

export default CreatePage;
