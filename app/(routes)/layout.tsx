import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-800 dark:to-gray-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
