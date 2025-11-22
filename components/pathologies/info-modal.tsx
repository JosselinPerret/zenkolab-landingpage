import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Pathology } from './types';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  pathology: Pathology | null;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, pathology }) => {
  if (!isOpen || !pathology) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[85vh] border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`p-6 ${pathology.color} bg-opacity-5 flex items-center justify-between border-b border-border`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-background border border-border shadow-sm text-blue-600`}>
                    {pathology.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{pathology.title}</h2>
                    <p className="text-sm text-muted-foreground font-medium">Informations médicales</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="prose prose-gray dark:prose-invert prose-lg max-w-none text-foreground">
                  <ReactMarkdown components={{
                    strong: ({node, ...props}) => <span className="font-bold text-foreground" {...props} />,
                    h1: ({node, ...props}) => <h1 className="text-foreground font-bold" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-foreground font-bold" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-foreground font-bold" {...props} />,
                    li: ({node, ...props}) => <li className="text-muted-foreground" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />,
                  }}>
                    {pathology.details}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-muted/50 border-t border-border text-center">
                <p className="text-xs text-muted-foreground">
                  Ces informations sont fournies à titre indicatif et ne remplacent pas un avis médical professionnel.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
