"use client"
import { useState, ChangeEvent } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Vehicle type
interface Vehicle {
  id: number
  image: string
  regNumber: string
  driver: string
  odometer: string
  tags: string[]
  brand: { name: string; logo: string }
  type: string
}

const vehicles: Vehicle[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    regNumber: "ABC 1234",
    driver: "John Doe",
    odometer: "45 230",
    tags: ["Electric", "Active"],
    brand: { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
    type: "Sedan",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400&q=80",
    regNumber: "XYZ 5678",
    driver: "Jane Smith",
    odometer: "12 890",
    tags: ["Diesel", "Inactive"],
    brand: { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
    type: "SUV",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
    regNumber: "LMN 9101",
    driver: "Alice Brown",
    odometer: "30 210",
    tags: ["Hybrid", "Active"],
    brand: { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png" },
    type: "Hatchback",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=400&q=80",
    regNumber: "DEF 2345",
    driver: "Bob White",
    odometer: "22 000",
    tags: ["Petrol", "Active"],
    brand: { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo.png" },
    type: "Sedan",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80",
    regNumber: "GHI 3456",
    driver: "Carol Black",
    odometer: "17 500",
    tags: ["Electric", "Inactive"],
    brand: { name: "Nissan", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Nissan_logo.png" },
    type: "Hatchback",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400&q=80",
    regNumber: "JKL 4567",
    driver: "David Green",
    odometer: "38 900",
    tags: ["Diesel", "Active"],
    brand: { name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
    type: "SUV",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    regNumber: "MNO 5678",
    driver: "Eve Blue",
    odometer: "9 000",
    tags: ["Hybrid", "Inactive"],
    brand: { name: "Kia", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Kia_logo.png" },
    type: "Crossover",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400&q=80",
    regNumber: "PQR 6789",
    driver: "Frank Red",
    odometer: "60 000",
    tags: ["Petrol", "Active"],
    brand: { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
    type: "Pickup",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?auto=format&fit=crop&w=400&q=80",
    regNumber: "STU 7890",
    driver: "Grace Yellow",
    odometer: "34 000",
    tags: ["Electric", "Active"],
    brand: { name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Hyundai_Motor_Company_logo.svg" },
    type: "Sedan",
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400&q=80",
    regNumber: "VWX 8901",
    driver: "Hank Violet",
    odometer: "41 000",
    tags: ["Diesel", "Inactive"],
    brand: { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/VW_logo_2019.png" },
    type: "SUV",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80",
    regNumber: "YZA 9012",
    driver: "Ivy Orange",
    odometer: "5 000",
    tags: ["Hybrid", "Active"],
    brand: { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Honda_logo.png" },
    type: "Sedan",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    regNumber: "BCD 0123",
    driver: "Jack Pink",
    odometer: "8 000",
    tags: ["Petrol", "Inactive"],
    brand: { name: "Chevrolet", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Chevrolet_logo.svg" },
    type: "Pickup",
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
    regNumber: "EFG 1234",
    driver: "Kara Silver",
    odometer: "12 000",
    tags: ["Electric", "Active"],
    brand: { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
    type: "Sedan",
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    regNumber: "HIJ 2345",
    driver: "Leo Gold",
    odometer: "25 000",
    tags: ["Diesel", "Active"],
    brand: { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
    type: "SUV",
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80",
    regNumber: "KLM 3456",
    driver: "Mona Bronze",
    odometer: "33 000",
    tags: ["Hybrid", "Inactive"],
    brand: { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png" },
    type: "Hatchback",
  },
  {
    id: 16,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400&q=80",
    regNumber: "NOP 4567",
    driver: "Ned Copper",
    odometer: "47 000",
    tags: ["Petrol", "Active"],
    brand: { name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
    type: "SUV",
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    regNumber: "QRS 5678",
    driver: "Olga Jade",
    odometer: "21 000",
    tags: ["Electric", "Inactive"],
    brand: { name: "Kia", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Kia_logo.png" },
    type: "Crossover",
  },
  {
    id: 18,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400&q=80",
    regNumber: "TUV 6789",
    driver: "Pauline Ruby",
    odometer: "39 000",
    tags: ["Diesel", "Active"],
    brand: { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
    type: "Pickup",
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?auto=format&fit=crop&w=400&q=80",
    regNumber: "WXY 7890",
    driver: "Quinn Pearl",
    odometer: "27 000",
    tags: ["Hybrid", "Active"],
    brand: { name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Hyundai_Motor_Company_logo.svg" },
    type: "Sedan",
  },
  {
    id: 20,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400&q=80",
    regNumber: "ZAB 8901",
    driver: "Rita Sapphire",
    odometer: "15 000",
    tags: ["Petrol", "Inactive"],
    brand: { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/VW_logo_2019.png" },
    type: "SUV",
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80",
    regNumber: "CDE 9012",
    driver: "Sam Topaz",
    odometer: "32 000",
    tags: ["Electric", "Active"],
    brand: { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
    type: "Sedan",
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    regNumber: "FGH 0123",
    driver: "Tina Quartz",
    odometer: "22 000",
    tags: ["Diesel", "Inactive"],
    brand: { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
    type: "SUV",
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
    regNumber: "IJK 1234",
    driver: "Uma Onyx",
    odometer: "18 000",
    tags: ["Hybrid", "Active"],
    brand: { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png" },
    type: "Hatchback",
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    regNumber: "LMN 2345",
    driver: "Vera Amber",
    odometer: "26 000",
    tags: ["Petrol", "Active"],
    brand: { name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
    type: "SUV",
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80",
    regNumber: "OPQ 3456",
    driver: "Will Garnet",
    odometer: "14 000",
    tags: ["Electric", "Inactive"],
    brand: { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
    type: "Sedan",
  },
]

function DocumentModal({ doc, onClose }: { doc: { name: string; type: string; url: string } | null; onClose: () => void }) {
  if (!doc) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-muted rounded-lg shadow-lg max-w-lg w-full p-6 relative animate-fade-in">
        <button
          className="absolute top-3 right-3 text-lg font-bold px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={onClose}
          aria-label="Close preview"
        >
          ×
        </button>
        <h3 className="text-lg font-semibold mb-4">{doc.name}</h3>
        {/* Mocked preview area */}
        <div className="flex flex-col items-center justify-center h-64">
          <div className="text-6xl mb-2">📄</div>
          <div className="text-base text-muted-foreground mb-2">{doc.type} Preview</div>
          <div className="text-xs text-muted-foreground">(Document preview is mocked)</div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  )
}

function VehicleDrawer({ vehicle, onClose }: { vehicle: Vehicle | null; onClose: () => void }) {
  const [documents, setDocuments] = useState([
    { name: "Registration Certificate", type: "PDF", url: "#" },
    { name: "Insurance Policy", type: "PDF", url: "#" },
    { name: "Service Report", type: "PDF", url: "#" },
  ])
  const [uploading, setUploading] = useState(false)
  const [previewDoc, setPreviewDoc] = useState<{ name: string; type: string; url: string } | null>(null)

  if (!vehicle) return null

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setUploading(true)
      setTimeout(() => {
        setDocuments((docs) => [
          ...docs,
          {
            name: file.name,
            type: file.type ? file.type.split("/")[1].toUpperCase() : "FILE",
            url: "#",
          },
        ])
        setUploading(false)
      }, 1000)
    }
  }

  return (
    <div className="fixed inset-0 z-40 flex">
      <div className="flex-1" onClick={onClose} />
      <aside className="w-full max-w-md bg-white dark:bg-muted shadow-xl h-full p-6 overflow-y-auto relative animate-slide-in-right">
        <button
          className="absolute top-4 right-4 text-lg font-bold px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={onClose}
          aria-label="Close preview"
        >
          ×
        </button>
        <Accordion type="multiple" defaultValue={["general", "tags"]} className="w-full">
          <AccordionItem value="general">
            <AccordionTrigger>General Info</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center gap-3 mb-4">
                <img src={vehicle.brand.logo} alt={vehicle.brand.name} className="w-10 h-10 object-contain" />
                <span className="font-semibold text-xl">{vehicle.brand.name}</span>
                <span className="ml-auto text-sm bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">{vehicle.type}</span>
              </div>
              <img src={vehicle.image} alt={vehicle.regNumber} className="w-full h-48 object-cover rounded mb-4" />
              <div className="mb-2 text-lg font-semibold">{vehicle.regNumber}</div>
              <div className="mb-2 text-sm text-muted-foreground">Driver: {vehicle.driver}</div>
              <div className="mb-2 text-sm">Odometer: <span className="font-medium">{vehicle.odometer} km</span></div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="tags">
            <AccordionTrigger>Tags</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {vehicle.tags.map((tag: string) => (
                  <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="documents">
            <AccordionTrigger>Documents</AccordionTrigger>
            <AccordionContent>
              <div className="mt-2">
                <ul className="space-y-2 mb-4">
                  {documents.length === 0 ? (
                    <li className="text-muted-foreground text-sm">No documents uploaded yet.</li>
                  ) : (
                    documents.map((doc, idx) => (
                      <li key={doc.name + idx} className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded px-3 py-2">
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-xs text-muted-foreground">{doc.type}</div>
                        </div>
                        <button
                          className="text-blue-600 dark:text-blue-400 underline text-xs font-medium"
                          onClick={() => setPreviewDoc(doc)}
                        >
                          View
                        </button>
                      </li>
                    ))
                  )}
                </ul>
                <label className="inline-block cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium">
                  {uploading ? "Uploading..." : "Upload Document"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    disabled={uploading}
                  />
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <DocumentModal doc={previewDoc} onClose={() => setPreviewDoc(null)} />
      </aside>
      <style jsx global>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  )
}

export default function VehiclesPage() {
  const [view, setView] = useState<'card' | 'list'>('card')
  const [selected, setSelected] = useState<Vehicle | null>(null)

  // Empty state for vehicles
  const isEmpty = vehicles.length === 0

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Vehicles</h1>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded border ${view === 'card' ? 'bg-pink-600 text-white' : 'bg-white dark:bg-muted'}`}
            onClick={() => setView('card')}
          >
            Card View
          </button>
          <button
            className={`px-3 py-1 rounded border ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-muted'}`}
            onClick={() => setView('list')}
          >
            List View
          </button>
        </div>
      </div>
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
          <div className="text-4xl mb-2">🚗</div>
          <div className="text-lg font-semibold mb-1">No vehicles found</div>
          <div className="text-sm">Add your first vehicle to get started.</div>
        </div>
      ) : view === 'card' ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map(vehicle => (
            <div
              key={vehicle.id}
              className="bg-white dark:bg-muted rounded-lg shadow p-4 flex flex-col gap-3 border cursor-pointer hover:ring-2 ring-pink-400"
              onClick={() => setSelected(vehicle)}
            >
              <div className="flex items-center gap-2 mb-2">
                <img src={vehicle.brand.logo} alt={vehicle.brand.name} className="w-7 h-7 object-contain" />
                <span className="font-semibold text-base">{vehicle.brand.name}</span>
                <span className="ml-auto text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">{vehicle.type}</span>
              </div>
              <img src={vehicle.image} alt={vehicle.regNumber} className="w-full h-32 object-cover rounded-md mb-2" />
              <div className="font-semibold text-lg">{vehicle.regNumber}</div>
              <div className="text-sm text-muted-foreground">Driver: {vehicle.driver}</div>
              <div className="text-sm">Odometer: <span className="font-medium">{vehicle.odometer} km</span></div>
              <div className="flex flex-wrap gap-2 mt-2">
                {vehicle.tags.map((tag: string) => (
                  <span key={tag} className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 px-2 py-0.5 rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2 border">Brand</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Reg. Number</th>
                <th className="p-2 border">Driver</th>
                <th className="p-2 border">Odometer</th>
                <th className="p-2 border">Tags</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map(vehicle => (
                <tr
                  key={vehicle.id}
                  className="border-b cursor-pointer hover:bg-pink-50 dark:hover:bg-pink-900/20"
                  onClick={() => setSelected(vehicle)}
                >
                  <td className="p-2 border flex items-center gap-2">
                    <img src={vehicle.brand.logo} alt={vehicle.brand.name} className="w-6 h-6 object-contain" />
                    {vehicle.brand.name}
                  </td>
                  <td className="p-2 border">{vehicle.type}</td>
                  <td className="p-2 border">
                    <img src={vehicle.image} alt={vehicle.regNumber} className="w-16 h-10 object-cover rounded" />
                  </td>
                  <td className="p-2 border font-semibold">{vehicle.regNumber}</td>
                  <td className="p-2 border">{vehicle.driver}</td>
                  <td className="p-2 border">{vehicle.odometer} km</td>
                  <td className="p-2 border">
                    <div className="flex flex-wrap gap-1">
                      {vehicle.tags.map((tag: string) => (
                        <span key={tag} className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 px-2 py-0.5 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <VehicleDrawer vehicle={selected} onClose={() => setSelected(null)} />
    </div>
  )
} 