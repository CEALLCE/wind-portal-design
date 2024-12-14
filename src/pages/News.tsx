import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const News = () => {
  const [newsItems, setNewsItems] = useState([
    {
      title: "New Service Launch",
      content: "We're excited to announce the launch of our new premium cleaning service package.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    },
    {
      title: "Customer Appreciation Month",
      content: "Join us in celebrating our valued customers with special discounts throughout June.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      title: "Sustainability Initiative",
      content: "WIND commits to using 100% eco-friendly cleaning products by 2024.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    },
  ]);

  const [newNews, setNewNews] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { toast } = useToast();

  const handleAddNews = () => {
    if (!newNews.title || !newNews.content || !newNews.image) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setNewsItems([newNews, ...newsItems]);
    setNewNews({ title: "", content: "", image: "" });
    toast({
      title: "Success",
      description: "News item added successfully",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-wind-light">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-wind-primary">Latest News</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Add News
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New News Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Input
                    placeholder="Title"
                    value={newNews.title}
                    onChange={(e) =>
                      setNewNews({ ...newNews, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Content"
                    value={newNews.content}
                    onChange={(e) =>
                      setNewNews({ ...newNews, content: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    placeholder="Image URL"
                    value={newNews.image}
                    onChange={(e) =>
                      setNewNews({ ...newNews, image: e.target.value })
                    }
                  />
                </div>
                <Button onClick={handleAddNews} className="w-full">
                  Add News
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-wind-gray mb-4">{item.content}</p>
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-wind-secondary hover:text-white"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;