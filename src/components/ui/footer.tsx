
export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CarParts</h3>
            <p className="text-gray-600">Your trusted source for quality car parts at competitive prices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">Email: info@carparts.com</p>
            <p className="text-gray-600">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
            <p className="text-gray-600">Saturday: 10am - 4pm</p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} CarParts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
