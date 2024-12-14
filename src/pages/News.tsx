import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const News = () => {
  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      title: "New Service Launch",
      content: "We're excited to announce the launch of our new premium cleaning service package.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    },
    {
      id: 2,
      title: "Customer Appreciation Month",
      content: "Join us in celebrating our valued customers with special discounts throughout June.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      id: 3,
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

  const [editingNews, setEditingNews] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState(null);

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

    const newNewsItem = {
      id: Date.now(),
      ...newNews
    };

    setNewsItems([newNewsItem, ...newsItems]);
    setNewNews({ title: "", content: "", image: "" });
    toast({
      title: "Success",
      description: "News item added successfully",
    });
  };

  const handleEditNews = () => {
    if (!editingNews.title || !editingNews.content || !editingNews.image) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setNewsItems(newsItems.map(item => 
      item.id === editingNews.id ? editingNews : item
    ));
    setEditingNews(null);
    toast({
      title: "Success",
      description: "News item updated successfully",
    });
  };

  const handleDeleteNews = () => {
    setNewsItems(newsItems.filter(item => item.id !== newsToDelete));
    setNewsToDelete(null);
    setIsDeleteDialogOpen(false);
    toast({
      title: "Success",
      description: "News item deleted successfully",
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
                <DialogDescription>
                  Fill in the details below to create a new news item.
                </DialogDescription>
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
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-wind-gray mb-4">{item.content}</p>
                <div className="flex justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="hover:bg-wind-secondary hover:text-white"
                        onClick={() => setEditingNews(item)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit News Item</DialogTitle>
                        <DialogDescription>
                          Make changes to the news item below.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div>
                          <Input
                            placeholder="Title"
                            value={editingNews?.title}
                            onChange={(e) =>
                              setEditingNews({ ...editingNews, title: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Textarea
                            placeholder="Content"
                            value={editingNews?.content}
                            onChange={(e) =>
                              setEditingNews({ ...editingNews, content: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Image URL"
                            value={editingNews?.image}
                            onChange={(e) =>
                              setEditingNews({ ...editingNews, image: e.target.value })
                            }
                          />
                        </div>
                        <Button onClick={handleEditNews} className="w-full">
                          Save Changes
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="hover:bg-red-500 hover:text-white"
                        onClick={() => setNewsToDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete News Item</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this news item? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="mt-4">
                        <Button
                          variant="outline"
                          onClick={() => setIsDeleteDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={handleDeleteNews}
                        >
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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