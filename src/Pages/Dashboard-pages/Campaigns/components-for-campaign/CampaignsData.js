export const filterOptions = [
    { id: "all", label: "All Status", icon: "◯" },
    { id: "active", label: "Active", icon: "◯" },
    { id: "draft", label: "Draft", icon: "◯" },
    { id: "pause", label: "Pause", icon: "◯" },
    { id: "error", label: "Error", icon: "△" },
    { id: "completed", label: "Completed", icon: "✓" },
    { id: "evergreen", label: "Ever Green", icon: "↻" },
  ];
  
  export const sortOptions = [
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
    { id: "az", label: "A-Z (Name)" },
    { id: "za", label: "Z-A (Name)" },
  ];
  
  export const initialCampaigns = [
    {
      id: 1,
      name: "Summer Sale Promotion",
      status: "Active",
      progress: 75,
      sent: 15000,
      clicks: 3200,
      replied: "1800 (12%)",
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      targetAudience: "Existing Customers",
      conversionRate: "3.5%",
      time: "10 am", // Added time
    },
    {
      id: 2,
      name: "New Product Launch",
      status: "Draft",
      progress: 0,
      sent: 0,
      clicks: 0,
      replied: "0 (0%)",
      startDate: "2024-08-15",
      endDate: "2024-09-15",
      targetAudience: "Tech Enthusiasts",
      conversionRate: "N/A",
      time: "9 am", // Added time
    },
    {
      id: 3,
      name: "Customer Feedback Survey",
      status: "Completed",
      progress: 100,
      sent: 5000,
      clicks: 2100,
      replied: "1500 (30%)",
      startDate: "2024-03-01",
      endDate: "2024-03-15",
      targetAudience: "Recent Buyers",
      conversionRate: "25%",
      time: "11 am", // Added time
    },
    {
      id: 4,
      name: "Holiday Special Offer",
      status: "Paused",
      progress: 50,
      sent: 10000,
      clicks: 1800,
      replied: "900 (9%)",
      startDate: "2024-12-01",
      endDate: "2024-12-25",
      targetAudience: "All Subscribers",
      conversionRate: "2.8%",
      time: "4 am", // Existing time
    },
    {
      id: 5,
      name: "sorry sorry",
      status: "Active",
      progress: 30,
      sent: 500,
      clicks: 150,
      replied: "75 (15%)",
      startDate: "2024-01-04",
      endDate: "2024-09-30",
      targetAudience: "Business Owners",
      conversionRate: "5%",
      time: "2 pm", // Added time
    },
  ];