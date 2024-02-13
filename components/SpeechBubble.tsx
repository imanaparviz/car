// components/SpeechBubble.tsx
const SpeechBubble = () => {
    return (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-12">
        <div className=" p-6 rounded-lg shadow-lg">
          <p className="text-4xl font-bold">400</p>
          <p className="text-base">The Power of Futures</p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-x-transparent border-x-8 border-t-8" />
      </div>
    );
  };
  
  export default SpeechBubble;