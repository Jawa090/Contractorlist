import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { deleteUserAccount } from "@/store/slices/authSlice";
import { addNotification } from "@/store/slices/uiSlice";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, AlertTriangle, User, Mail, Phone, Building } from "lucide-react";

const ClientInfoManager = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, deleteAccountState = { pending: false, fulfilled: false, rejected: false, error: null } } = useAppSelector((state) => state.auth);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  // Safely handle potential undefined state to avoid runtime errors
  const isDeleting = deleteAccountState?.pending ?? false;

  const handleDeleteClientInfo = async () => {
    if (deleteConfirmation !== "DELETE") {
      dispatch(
        addNotification({
          type: "error",
          title: "Confirmation Required",
          message: "Please type 'DELETE' to confirm information deletion.",
        })
      );
      return;
    }

    try {
      await dispatch(deleteUserAccount()).unwrap();
      dispatch(
        addNotification({
          type: "success",
          title: "Information Deleted",
          message: "Your client information has been successfully deleted.",
        })
      );
      navigate("/");
    } catch (error) {
      dispatch(
        addNotification({
          type: "error",
          title: "Deletion Failed",
          message: "Failed to delete information. Please try again.",
        })
      );
    }
  };

  if (!user || user.role !== 'client') {
    return null;
  }

  return (
    <Card className="border-red-200">
      <CardHeader>
        <CardTitle className="text-red-600 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Client Information Management
        </CardTitle>
        <CardDescription>
          Manage your client information and account data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Information Display */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900">Current Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-medium capitalize">{user.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Information Section */}
        <div className="border border-red-200 rounded-lg p-4 bg-red-50">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-red-900">Delete Client Information</h4>
              <p className="text-sm text-red-700 mt-1">
                Permanently delete all your client information and account data. This action cannot be undone.
              </p>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="mt-3">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete My Information
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2 text-red-600">
                      <AlertTriangle className="h-5 w-5" />
                      Delete Client Information
                    </AlertDialogTitle>
                    <AlertDialogDescription className="space-y-3">
                      <p>
                        This will permanently delete all your client information including:
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                        <li>Personal profile information</li>
                        <li>Project preferences and history</li>
                        <li>Saved contractor connections</li>
                        <li>Communication history</li>
                        <li>Account settings and preferences</li>
                      </ul>
                      <p className="text-red-600 font-medium">
                        This action cannot be undone.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="delete-confirmation" className="text-sm font-medium">
                          Type "DELETE" to confirm:
                        </Label>
                        <Input
                          id="delete-confirmation"
                          value={deleteConfirmation}
                          onChange={(e) => setDeleteConfirmation(e.target.value)}
                          placeholder="Type DELETE here"
                          className="border-red-300 focus:border-red-500"
                        />
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setDeleteConfirmation("")}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                  onClick={handleDeleteClientInfo}
                  disabled={deleteConfirmation !== "DELETE" || isDeleting}
                      className="bg-red-600 hover:bg-red-700"
                    >
                  {isDeleting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Deleting...
                        </div>
                      ) : (
                        "Delete Information"
                      )}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientInfoManager;
