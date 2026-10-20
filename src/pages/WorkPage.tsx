import React, { useState } from 'react';
import { Search, ArrowRight, Layers, Ruler, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../config/siteConfig.ts';

interface WorkPageProps {
  onSelectProject: (project: PortfolioProject) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onSelectProject,
  onOpenQuoteModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'exhibitions', label: 'Exhibitions' },
    { id: 'launches', label: 'Product Launches' },
    { id: 'experiential', label: 'Experiential Activations' },
    { id: 'trade', label: 'Trade & Fleet Marketing' },
    { id: 'printing', label: 'Corporate Printing' },
  ];

  const filtered = PORTFOLIO_PROJECTS.filter((project: PortfolioProject) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.clientSector.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8791F]">
          <span>Company Profile Portfolio</span>
          <span className="text-[#E5DFD3]">·</span>
          <span className="text-[#16130F]/70 font-semibold">Real Execution Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#16130F] tracking-tight">
          Physical Work That Commands Attention.
        </h1>
        <p className="text-base sm:text-lg text-[#16130F]/75 leading-relaxed">
          Review authentic client projects from the PrintVision portfolio—spanning nationwide youth activations, grand property launches, high-volume pharmaceutical packaging, and custom exhibition pavilions at Expo Centre.
        </p>

        {/* Authenticity Badge */}
        <div className="flex items-start gap-2.5 p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E5DFD3] text-xs text-[#16130F]/80">
          <CheckCircle2 className="w-4 h-4 text-[#E8791F] shrink-0 mt-0.5" />
          <span>
            <strong>Verified Agency Work:</strong> Features real brand partners including Divine Developers, Al-Hilal Industries (Boomer Cola), Marush Animal Medicine, Pakistan Tourism Development Corporation (PTDC), CEVA Pharma, and Big Bird Group.
          </span>
        </div>
      </div>

      {/* Interactive Controls: Search & Category Filter Tabs */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#16130F] text-white shadow-xs'
                    : 'bg-white text-[#16130F]/70 hover:text-[#16130F] border border-[#E5DFD3] hover:border-[#16130F]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#16130F]/40 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by client or keyword..."
            className="w-full pl-9 pr-4 py-2 bg-white text-xs text-[#16130F] border border-[#E5DFD3] rounded-lg focus:outline-none focus:border-[#E8791F] focus:ring-2 focus:ring-[#E8791F]/20 placeholder-[#16130F]/40"
          />
        </div>
      </div>

      {/* Grid of Projects */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#E5DFD3] p-12 text-center space-y-3">
          <p className="text-[#16130F]/60 text-sm">
            No projects matched your search criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs font-bold text-[#E8791F] hover:underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project: PortfolioProject) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#16130F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold text-white bg-[#16130F]/80 backdrop-blur-xs px-2.5 py-0.5 rounded border border-white/10">
                    {project.typeBadge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#E8791F] mb-0.5">
                    {project.categoryLabel}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F3EFE7] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#16130F]/75 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#E5DFD3]/60 text-[11px] text-[#16130F]/60">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#16130F]">Client / Sector:</span>
                    <span className="text-[#16130F]/70 truncate max-w-[180px]">{project.clientSector}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#16130F]">Scope:</span>
                    <span>{project.dimensions}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E5DFD3]/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E8791F] group-hover:underline flex items-center gap-1">
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuoteModal(project.category);
                    }}
                    className="text-xs font-semibold text-[#16130F] hover:text-white bg-[#F3EFE7] hover:bg-[#E8791F] px-2.5 py-1 rounded transition-colors"
                  >
                    Quick Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Direct Consultation Banner */}
      <div className="bg-[#16130F] text-[#F3EFE7] rounded-3xl p-8 sm:p-12 border border-[#26201A] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E8791F]">
            Proven Track Record
          </div>
          <h3 className="text-2xl font-bold text-white">Have a Similar Project in Mind?</h3>
          <p className="text-[#F3EFE7]/70 text-xs sm:text-sm leading-relaxed">
            From single custom exhibition booths to nationwide marketing rollouts, our senior project managers in Lahore provide direct technical feasibility and quotation.
          </p>
        </div>

        <button
          onClick={() => onOpenQuoteModal()}
          className="px-7 py-3.5 text-sm font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] rounded-xl shadow-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Request Project Estimate
        </button>
      </div>
    </div>
  );
};
