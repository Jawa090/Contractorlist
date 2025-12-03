import { Star, ThumbsUp, MessageSquare, Filter, Search, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ReviewsManagement = () => {
  const stats = [
    { label: "Average Rating", value: "4.8", icon: Star, color: "yellow" },
    { label: "Total Reviews", value: "1,234", icon: MessageSquare, color: "blue" },
    { label: "Response Rate", value: "95%", icon: TrendingUp, color: "green" },
    { label: "Helpful Votes", value: "3,456", icon: ThumbsUp, color: "purple" },
  ];

  const reviews = [
    {
      id: 1,
      customer: "John Smith",
      avatar: "/placeholder.jpg",
      rating: 5,
      date: "2024-01-20",
      product: "Premium Cement Bag",
      comment: "Excellent quality cement! Fast delivery and great customer service. Will definitely order again.",
      helpful: 12,
      replied: true,
      reply: "Thank you for your kind words! We're glad you're satisfied with our product.",
    },
    {
      id: 2,
      customer: "Sarah Johnson",
      avatar: "/placeholder.jpg",
      rating: 4,
      date: "2024-01-19",
      product: "Steel Rods Bundle",
      comment: "Good quality steel rods. Packaging could be better but overall satisfied with the purchase.",
      helpful: 8,
      replied: false,
    },
    {
      id: 3,
      customer: "Mike Wilson",
      avatar: "/placeholder.jpg",
      rating: 5,
      date: "2024-01-18",
      product: "Paint Supplies Kit",
      comment: "Perfect for my project! Everything I needed in one kit. Highly recommend!",
      helpful: 15,
      replied: true,
      reply: "We're thrilled to hear that! Thank you for choosing us.",
    },
    {
      id: 4,
      customer: "Emily Brown",
      avatar: "/placeholder.jpg",
      rating: 3,
      date: "2024-01-17",
      product: "Electrical Wiring Set",
      comment: "Product is okay but delivery took longer than expected. Quality is decent for the price.",
      helpful: 5,
      replied: false,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reviews & Ratings</h1>
        <p className="text-gray-600 mt-1">Manage customer feedback and reviews</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                    {stat.label === "Average Rating" && renderStars(5)}
                  </div>
                </div>
                <div className={`bg-${stat.color}-50 p-3 rounded-xl`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search reviews..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              All Ratings
            </Button>
            <Button variant="outline" className="gap-2">
              Unanswered
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={review.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-yellow-100 to-orange-100 text-orange-600 font-bold">
                    {review.customer.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900">{review.customer}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {review.product}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  
                  {review.replied && review.reply && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-300">
                          Your Reply
                        </Badge>
                      </div>
                      <p className="text-gray-700 text-sm">{review.reply}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-2 hover:bg-gray-100">
                      <ThumbsUp className="w-4 h-4" />
                      {review.helpful} helpful
                    </Button>
                    {!review.replied && (
                      <Button variant="outline" size="sm" className="gap-2 hover:bg-yellow-50">
                        <MessageSquare className="w-4 h-4" />
                        Reply
                      </Button>
                    )}
                  </div>

                  {!review.replied && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <Textarea
                        placeholder="Write your response..."
                        rows={3}
                        className="mb-3"
                      />
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">Cancel</Button>
                        <Button size="sm" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          Send Reply
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsManagement;
