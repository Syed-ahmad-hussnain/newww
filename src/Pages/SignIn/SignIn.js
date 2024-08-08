import React, { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Images/Brand-Logo.png";
import hidePasswordIcon from "../../assets/Icons/icon-eye-filled.png";
import showPasswordIcon from "../../assets/Icons/icon-eye.png";
import PasswordResetPopup from "../../Components/Forgot-Password/forgotpassword";

// Add this CSS class to your global styles or in a <style> tag in your component
const noSelectStyle = `
  .no-select {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
`;

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center text-white cursor-pointer group no-select">
      <div className="relative mr-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-6 h-6 border-2 border-white rounded-full flex items-center justify-center transition-colors duration-200 ${checked ? 'bg-white' : 'group-hover:bg-white/20'}`}>
          {checked && <Check size={16} className="text-purple-600" strokeWidth={3} />}
        </div>
      </div>
      <span className="text-sm group-hover:underline">{label}</span>
    </label>
  );
};

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResetPopupOpen, setIsResetPopupOpen] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form submitted", { email, password, rememberMe });
        // Add your authentication logic here
        // If successful, navigate to the dashboard
        navigate('/dashboard');
      } catch (error) {
        setErrors({ general: "An error occurred. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setIsResetPopupOpen(true);
  };

  return (
    <>
      <style>{noSelectStyle}</style>
      <div className="min-h-screen flex items-center justify-center bg-custom-gradient from-purple-500 to-indigo-600 relative no-select">
        <button
          onClick={handleBackClick}
          aria-label="Go back"
          className="absolute top-8 left-8 text-white hover:text-gray-200 transition duration-300 w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-purple-600"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="w-[520px] p-10 space-y-8 bg-white/20  rounded-3xl ">
          <div className="flex justify-center">
            <img 
              src={img1} 
              alt="logo" 
              className="h-[120px] w-[120px] object-contain" 
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <h1 className="font-poppins text-4xl font-semibold text-center text-white">
            Login To Your Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 px-6 bg-white rounded-full focus:outline-none text-black placeholder-black/70 transition-all duration-200 focus:ring-2 focus:ring-purple-400"
                required
              />
              {errors.email && <p className="text-red-300 text-xs mt-1 ml-4">{errors.email}</p>}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 px-6 bg-white rounded-full focus:outline-none text-black placeholder-black/70 transition-all duration-200 focus:ring-2 focus:ring-purple-400"
                required
              />
              <button
                type="button"
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-black/70 hover:text-black transition-colors duration-200"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={showPassword ? hidePasswordIcon : showPasswordIcon}
                  alt={showPassword ? "Hide password" : "Show password"}
                  className="w-6 h-6"
                />
              </button>
              {errors.password && <p className="text-red-300 text-xs mt-1 ml-4">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <CustomCheckbox
                label="Remember me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <button 
                type="button"
                className="text-sm text-white hover:underline focus:outline-none" 
                onClick={handleForgotPasswordClick}
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className={`w-full h-14 bg-indigo-600 text-white rounded-full transition duration-300 font-semibold text-lg ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700 active:bg-indigo-800'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {errors.general && (
            <p className="text-red-300 text-sm text-center">{errors.general}</p>
          )}

          <div className="text-center">
            <span className="text-sm text-white">Don't have an account? </span>
            <a href="#" className="text-sm text-white font-semibold hover:underline focus:outline-none">
              Get Started
            </a>
          </div>
        </div>

        <PasswordResetPopup 
          isOpen={isResetPopupOpen} 
          onClose={() => setIsResetPopupOpen(false)} 
        />
      </div>
    </>
  );
};

export default SignInPage;