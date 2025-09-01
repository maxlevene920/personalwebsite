'use client'

import { motion } from 'framer-motion'
import { Play, Image as ImageIcon, Download } from 'lucide-react'
import { useState } from 'react'
import { ProjectAsset } from '../lib/types'

interface AssetGalleryProps {
  assets: ProjectAsset[]
}

export function AssetGallery({ assets }: AssetGalleryProps) {
  const [selectedAsset, setSelectedAsset] = useState<ProjectAsset | null>(null)

  const handleAssetClick = (asset: ProjectAsset) => {
    setSelectedAsset(asset)
  }

  const handleCloseModal = () => {
    setSelectedAsset(null)
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Project Gallery</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="group relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200"
            onClick={() => handleAssetClick(asset)}
          >
            {asset.type === 'image' ? (
              <img
                src={asset.url}
                alt={asset.description || asset.filename}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Play size={32} className="text-muted-foreground" />
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {asset.type === 'image' ? (
                  <ImageIcon size={24} className="text-white" />
                ) : (
                  <Play size={24} className="text-white" />
                )}
              </div>
            </div>


          </motion.div>
        ))}
      </div>

      {/* Modal for viewing assets */}
      {selectedAsset && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-card rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-200"
            >
              ×
            </button>

            {/* Asset content */}
            <div className="relative">
              {selectedAsset.type === 'image' ? (
                <img
                  src={selectedAsset.url}
                  alt={selectedAsset.description || selectedAsset.filename}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedAsset.url}
                  controls
                  className="w-full h-auto max-h-[80vh]"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Asset details */}
            <div className="p-6 bg-card">
                             <div className="flex items-center justify-between mb-2">
                 {selectedAsset.description && (
                   <h3 className="text-lg font-semibold text-foreground">
                     {selectedAsset.description}
                   </h3>
                 )}
                <a
                  href={selectedAsset.url}
                  download={selectedAsset.filename}
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
                             {selectedAsset.description && (
                 <p className="text-muted-foreground text-sm">
                   {selectedAsset.description}
                 </p>
               )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
