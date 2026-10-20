import React from 'react';
import { X, ArrowRight, Layers, Ruler, CheckCircle, Tag } from 'lucide-react';
import { PortfolioProject } from '../config/siteConfig.ts';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E5DFD3] overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#16130F] text-white px-6 py-4 flex items-center justify-between border-b border-[#26201A]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#E8791F]">
              {project.categoryLabel}
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs text-[#F3EFE7]/80 font-medium">{project.typeBadge}</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#F3EFE7]/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Main Visual */}
          <div className="relative aspect-video w-full bg-[#16130F] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">{project.title}</h3>
              <p className="text-xs sm:text-sm text-[#F3EFE7]/80 mt-1">{project.clientSector}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8791F] mb-2">
                Project Overview & Execution Scope
              </h4>
              <p className="text-[#16130F]/80 text-sm leading-relaxed">{project.description}</p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF8F5] p-4 rounded-2xl border border-[#E5DFD3]">
              <div className="flex items-start gap-3">
                <Ruler className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#16130F]/60 font-medium">Execution Scope</div>
                  <div className="text-sm font-semibold text-[#16130F]">{project.dimensions}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#16130F]/60 font-medium">Primary Materials & Finishes</div>
                  <div className="text-sm font-semibold text-[#16130F]">
                    {project.materials.join(', ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Scope Deliverables */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#16130F]/60 mb-3">
                Deliverables & Production Handled
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.scope.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#16130F]/80">
                    <CheckCircle className="w-4 h-4 text-[#E8791F] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#16130F]/60 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#E8791F]" />
                <span>Discuss a similar project with our Lahore team</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(project.category);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Quotation for Similar Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
