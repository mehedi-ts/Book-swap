import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaRegEdit } from "react-icons/fa";
const ProfileUpdate = () => {
  return (
    <Modal>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegEdit size={16} />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image</Label>
                    <Input placeholder="Enter your image url" type="url" />
                  </TextField>
                  <Modal.Footer className="mt-7">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#2563EB]  text-[#FFFFFF]"
                      slot="close"
                    >
                      Update
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

export default ProfileUpdate;
