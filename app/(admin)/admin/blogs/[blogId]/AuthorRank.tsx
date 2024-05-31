import ChampionIcon from "@/components/icons/ChampionIcon";
import TradeUpIcon from "@/components/icons/TradeUpIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AuthorRank = () => {
  return (
    <Card className="flex items-center align-middle justify-center p-4">
      <div className="w-full flex items-center align-middle justify-center gap-3">
        <ChampionIcon className="w-6 h-6 text-yellow-500" />
        <p className="text-xl font-semibold">11/80</p>
        <TradeUpIcon className="w-6 h-6 text-green-500" />
      </div>
    </Card>
  );
};

export default AuthorRank;
