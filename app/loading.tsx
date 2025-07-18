import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-50 to-sand-50">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-terracotta-600" />
        <p className="text-sm text-stone-600">Loading...</p>
      </div>
    </div>
  );
}
