import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SignupRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupRoleModal = ({ isOpen, onClose }: SignupRoleModalProps) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: 'client' | 'contractor' | 'vendor') => {
    onClose();
    navigate('/signup', { state: { preselectedRole: role } });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Join Our Network
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 text-base">
            Choose your account type to get started
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Client Option */}
          <Button
            onClick={() => handleRoleSelection('client')}
            variant="outline"
            className="h-[260px] p-6 flex flex-col items-center justify-between hover:bg-green-50 hover:border-green-400 hover:shadow-xl transition-all group border-2 rounded-2xl"
          >
            <div className="flex flex-col items-center gap-4 flex-1 justify-center w-full">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-center w-full">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Client</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Find contractors
                </p>
              </div>
            </div>
            <div className="w-full px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-xl text-center">
              Post Projects
            </div>
          </Button>

          {/* Contractor Option */}
          <Button
            onClick={() => handleRoleSelection('contractor')}
            variant="outline"
            className="h-[260px] p-6 flex flex-col items-center justify-between hover:bg-blue-50 hover:border-blue-400 hover:shadow-xl transition-all group border-2 rounded-2xl"
          >
            <div className="flex flex-col items-center gap-4 flex-1 justify-center w-full">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-center w-full">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Contractor</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Get projects
                </p>
              </div>
            </div>
            <div className="w-full px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-xl text-center">
              Find Work
            </div>
          </Button>

          {/* Vendor Option */}
          <Button
            onClick={() => handleRoleSelection('vendor')}
            variant="outline"
            className="h-[260px] p-6 flex flex-col items-center justify-between hover:bg-purple-50 hover:border-purple-400 hover:shadow-xl transition-all group border-2 rounded-2xl"
          >
            <div className="flex flex-col items-center gap-4 flex-1 justify-center w-full">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Store className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-center w-full">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Vendor</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sell materials
                </p>
              </div>
            </div>
            <div className="w-full px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-xl text-center">
              Sell Products
            </div>
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600 border-t pt-4 mt-2">
          Already have an account?{" "}
          <button
            onClick={() => {
              onClose();
              navigate('/login');
            }}
            className="font-semibold text-yellow-600 hover:text-yellow-700 underline underline-offset-2"
          >
            Sign in here
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupRoleModal;
