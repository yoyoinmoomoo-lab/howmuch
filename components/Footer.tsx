export default function Footer() {
  return (
    <footer className="text-center text-xs md:text-sm text-gray-600 py-6 border-t border-gray-200">
      <div className="space-y-2">
        <p className="font-medium">
          This tool is for reference only. We do not store any input on our servers. Ads or affiliate links may be included.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://moomoo.so/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007AFF] hover:underline"
          >
            Privacy
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://moomoo.so/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007AFF] hover:underline"
          >
            Terms
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://moomoo.so/disclaimer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007AFF] hover:underline"
          >
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}

