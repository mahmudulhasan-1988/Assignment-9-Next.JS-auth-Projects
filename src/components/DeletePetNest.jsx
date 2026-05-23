"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";

export function DeletePetNestAlert({addPetNestDetail}) {
    const {_id, Name} = addPetNestDetail;
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/addPetNestDetail/${_id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            }});
        const data = await res.json();
        redirect('/all-petnestcard')
        console.log(data);
    }
  return (
    <AlertDialog>
      <Button variant="outline" className={'border-[#ff6b6b] text-[#ff5252] hover:bg-[#ff5252] hover:text-white rounded-full'}><TrashBin /> Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Pet Nest Permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{Name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}