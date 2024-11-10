import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

interface Props {
  filters: any;
  handleFilterChange: any;
  applyFilters: any;
}

export default function SidebarFilter({
  filters,
  handleFilterChange,
  applyFilters,
}: Props) {
  const { isMobile } = useSidebar();

  return (
    <Sidebar
      variant={isMobile ? "floating" : "inset"}
      collapsible={isMobile ? "offcanvas" : "none"}
      className="min-w-72 rounded-xl border bg-white shadow-xl dark:bg-transparent/70"
    >
      <SidebarHeader className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-semibold">Filters</h2>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <div className="space-y-6">
          <SidebarGroup>
            <SidebarGroupLabel className="mb-2 text-sm font-medium">
              Price
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  placeholder="Max Price"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    handleFilterChange("maxPrice", e.target.value)
                  }
                  className="w-full"
                />
                <span className="text-sm font-medium">$</span>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="mb-2 text-sm font-medium">
              Stops
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <RadioGroup
                value={filters.stops}
                onValueChange={(value) => handleFilterChange("stops", value)}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="any" id="any" />
                  <Label htmlFor="any" className="text-sm">
                    Any
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0" id="nonstop" />
                  <Label htmlFor="nonstop" className="text-sm">
                    Non-stop
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="onestop" />
                  <Label htmlFor="onestop" className="text-sm">
                    1 stop
                  </Label>
                </div>
              </RadioGroup>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="mb-2 text-sm font-medium">
              Airline
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <Select
                value={filters.airline}
                onValueChange={(value) => handleFilterChange("airline", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Airline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="Skyline Airways">
                    Skyline Airways
                  </SelectItem>
                  <SelectItem value="Ocean Air">Ocean Air</SelectItem>
                  <SelectItem value="Global Wings">Global Wings</SelectItem>
                </SelectContent>
              </Select>
            </SidebarGroupContent>
          </SidebarGroup>

          <Button onClick={applyFilters} className="w-full">
            Apply Filters
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
