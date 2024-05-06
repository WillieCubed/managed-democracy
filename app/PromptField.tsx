export default function PromptField() {
  return (
    <div className="flex-1 flex flex-col space-y-2">
      <label className="text-lg" htmlFor="prompt">
        Generate a new law
      </label>
      <div className="flex space-x-4">

        <textarea
          className="flex-1 w-full bg-surface-container-high p-4 text-on-surface-variant rounded-[28px] resize-none"
          id="prompt"
          name="prompt"
          placeholder="What policy would you like to create?"
        >
        </textarea>
        <button type="submit" className="rounded-full text-on-primary bg-primary px-4 h-12">Submit</button>
      </div>
    </div>
  );
}
