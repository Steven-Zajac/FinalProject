import { useNavigate } from "react-router-dom";

const useUserDeletionHandler = (userId) => {
    const navigate = useNavigate();
    const handleUserDelete = async (userId) => {
    
        const isConfirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        
        if (isConfirmed) {
            try {
                const deletion = await fetch(`/users/${userId}`, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                });
                if (!deletion.ok) {
                    throw new Error(`Error: ${deletion.status}`);
                } else {
                    window.alert('Success!');
                    navigate('/');
                    localStorage.clear();
                }
            } catch (error) {
                throw error;
            }
        }
    };
    return handleUserDelete;
};

export default useUserDeletionHandler;